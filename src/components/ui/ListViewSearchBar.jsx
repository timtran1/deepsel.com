import {Chip, Modal, Menu, Button as MantineButton, Tooltip} from "@mantine/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faXmark, faPlus, faFileArrowDown} from "@fortawesome/free-solid-svg-icons";
import {useDisclosure} from "@mantine/hooks";
import H2 from "./H2";
import TextInput from "./TextInput";
import Button from "./Button";
import Select from "./Select";
import {useEffect, useState} from "react";
import useModel from "../../api/useModel.jsx";
import NotificationState from "../../stores/NotificationState.js";
import ormOperators from "../../constants/ormOperators.js";

export default function ListViewSearchBar(props) {
    const {
        query,
        enableAdvanced = false,
        defaultEnabledFilters = [], // list of string_id of filters to be enabled by default
        selectedRows, setSelectedRows,
    } = props

    const {
        modelName: model,
        searchTerm, setSearchTerm,
        pageSize, setPageSize,
        setFilters: setQueryFilters,
        deleteWithConfirm,
        get,
    } = query

    const {notify} = NotificationState(state => state)

    const [advancedSearchTerm, setAdvancedSearchTerm] = useState('')

    const [advanceSearchOpened, {toggle}] = useDisclosure(enableAdvanced)
    const [editFilterModalOpened, {
        open: openEditFilterModal,
        close: closeEditFilterModal
    }] = useDisclosure(false)
    const [createFilterModalOpened, {
        open: openCreateFilterModal,
        close: closeCreateFilterModal
    }] = useDisclosure(false)
    const [editingFilter, setEditingFilter] = useState(null)
    const [creatingFilter, setCreatingFilter] = useState({
        model,
        name: '',
        field: '',
        operator: '',
        value_type: 'Search Input',
        value: ''
    })
    const [enabledFilters, setEnabledFilters] = useState([])
    const [initializedDefaultFilters, setInitializedDefaultFilters] = useState(false)

    const {
        data: filterRecords,
        update: updateFilter,
        create: createFilter,
        deleteWithConfirm: deleteFilter
    } = useModel('filter', {
        autoFetch: true,
        filters: [{
            field: 'model',
            operator: '=',
            value: model
        }]
    })

    // initialize default filter
    if (defaultEnabledFilters.length > 0 && filterRecords.length > 0 && enabledFilters.length === 0 && !initializedDefaultFilters) {
        const defaultEnabledFiltersRecords = filterRecords.filter(f => defaultEnabledFilters.includes(f.string_id))
        const defaultEnabledFiltersIds = defaultEnabledFiltersRecords.map(f => f.id)
        setEnabledFilters(defaultEnabledFiltersIds)
        setInitializedDefaultFilters(true)
    }

    // insert make query from list of enabled filters
    useEffect(() => {
        if (enabledFilters.length > 0) {
            const enabledFiltersRecords = filterRecords.filter(f => enabledFilters.includes(f.id))
            const queryFilters = enabledFiltersRecords.map(f => {
                const {field, operator, value, value_type} = f
                if (value_type === 'Search Input') {
                    return {
                        field,
                        operator,
                        value: advancedSearchTerm
                    }
                } else {
                    return {
                        field,
                        operator,
                        value
                    }
                }
            })
            setQueryFilters(queryFilters)
        } else {
            setQueryFilters([])
        }
    }, [advancedSearchTerm, filterRecords, enabledFilters])

    function toggleAdvanceSearch() {
        toggle()
        setAdvancedSearchTerm('')
    }

    function handleDelete() {
        deleteWithConfirm(selectedRows.map(row => row.id), () => {
            setSelectedRows([])
            get()
        })
    }

    async function handleSubmitFilterEdit(e) {
        e.preventDefault()
        try {
            updateFilter(editingFilter)
            closeEditFilterModal()
            notify({type: 'success', message: 'Filter updated!'})
        } catch (e) {
            console.error(e)
            notify({type: 'error', message: e.message})
        }
    }

    async function handleSubmitFilterCreate(e) {
        e.preventDefault()
        try {
            await createFilter(creatingFilter)
            closeCreateFilterModal()
            notify({type: 'success', message: 'Filter created!'})
        } catch (e) {
            console.error(e)
            notify({type: 'error', message: e.message})
        }
    }

    function handleDeleteFilter() {
        return deleteFilter([editingFilter?.id], () => {
            closeEditFilterModal()
        })
    }

    function downloadSelectedRows() {
        if (selectedRows.length > 0) {
            console.log({selectedRows})
            // Create CSV content
            const replacer = (key, value) => {
                // If the value is an object or array (relationships)
                // return undefined to skip this property
                if (typeof value === 'object' && value !== null) {
                    return undefined;
                }
                // If the value is null, return an empty string
                return value === null ? '' : value;
            };
            const header = Object.keys(selectedRows[0]);
            let csv = selectedRows.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(',')).join('\n');
            // add header
            const headerRow = header.join(',')
            csv = headerRow + '\n' + csv

            // Create a blob from the CSV content
            const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});

            // Create a link element and simulate a click to download the file
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${model}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            notify({type: 'warning', message: 'No rows selected!'})
        }
    }

    return (
        <>
            {/*Filter Edit modal*/}
            <Modal opened={editFilterModalOpened} onClose={closeEditFilterModal} title={<H2>Edit Filter</H2>}>

                <form className={`flex flex-col gap-2`} onSubmit={handleSubmitFilterEdit}>
                    <TextInput
                        label={`Filter Name`}
                        value={editingFilter?.name}
                        onChange={e => setEditingFilter({...editingFilter, name: e.target.value})}
                        required
                    />
                    <TextInput
                        label={`Field`}
                        value={editingFilter?.field}
                        onChange={e => setEditingFilter({...editingFilter, field: e.target.value})}
                        required
                    />
                    <Select
                        label={`Operator`}
                        data={ormOperators}
                        value={editingFilter?.operator}
                        onChange={value => setEditingFilter({...editingFilter, operator: value})}
                        required
                    />

                    <Select
                        label={`Value Type`}
                        data={['Search Input', 'Custom Value']}
                        value={editingFilter?.value_type}
                        onChange={value => setEditingFilter({...editingFilter, value_type: value})}
                        required
                    />

                    {editingFilter?.value_type === 'Custom Value' &&
                        <TextInput
                            label={`Value`}
                            value={editingFilter?.value}
                            onChange={e => setEditingFilter({...editingFilter, value: e.target.value})}
                            required
                        />
                    }
                    <Button type={`button`} variant={`outline`} color={`red`} onClick={handleDeleteFilter}>
                        Delete
                    </Button>
                    <Button type={`submit`}>Save</Button>

                </form>
            </Modal>

            {/*Filter Create modal*/}
            <Modal opened={createFilterModalOpened} onClose={closeCreateFilterModal} title={<H2>Create Filter</H2>}>
                <form className={`flex flex-col gap-2`} onSubmit={handleSubmitFilterCreate}>
                    <TextInput
                        label={`Filter Name`}
                        value={creatingFilter?.name}
                        onChange={e => setCreatingFilter({...creatingFilter, name: e.target.value})}
                        required
                    />
                    <TextInput
                        label={`Field`}
                        value={creatingFilter?.field}
                        onChange={e => setCreatingFilter({...creatingFilter, field: e.target.value})}
                        required
                    />
                    <Select
                        label={`Operator`}
                        data={ormOperators}
                        value={creatingFilter?.operator}
                        onChange={value => setCreatingFilter({...creatingFilter, operator: value})}
                        required
                    />

                    <Select
                        label={`Value Type`}
                        data={['Search Input', 'Custom Value']}
                        value={creatingFilter?.value_type}
                        onChange={value => setCreatingFilter({...creatingFilter, value_type: value})}
                        required
                    />

                    {creatingFilter?.value_type === 'Custom Value' &&
                        <TextInput
                            label={`Value`}
                            value={creatingFilter?.value}
                            onChange={e => setCreatingFilter({...creatingFilter, value: e.target.value})}
                            required
                        />
                    }

                    <Button type={`submit`}>Create</Button>
                </form>
            </Modal>

            {/*Filter, actions row*/}
            <div className={`flex my-2 min-h-[30px] items-end justify-between flex-wrap`}>
                <div className={`flex items-center flex-wrap gap-2`}>
                    {advanceSearchOpened ?
                        <>
                            <div className={`flex gap-2 items-center flex-wrap`}>
                                <TextInput
                                    classNames={{input: 'shadow-sm'}}
                                    value={advancedSearchTerm}
                                    onChange={e => setAdvancedSearchTerm(e.target.value)}
                                    placeholder={`Search...`}/>
                                {filterRecords.map(filter =>
                                    <Chip
                                        checked={enabledFilters.includes(filter.id)}
                                        key={filter.id}
                                        onChange={() => {
                                            if (enabledFilters.includes(filter.id)) {
                                                setEnabledFilters(enabledFilters.filter(id => id !== filter.id))
                                            } else {
                                                setEnabledFilters([...enabledFilters, filter.id])
                                            }
                                        }}
                                    >
                                        {filter.name}
                                    </Chip>
                                )}
                            </div>
                        </>
                        :
                        <div className={`flex items-center gap-2`}>
                            <TextInput
                                classNames={{input: 'shadow-sm'}}
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder={`Search...`}/>
                            <button className={`text-xs text-gray-500 underline`} onClick={toggleAdvanceSearch}>
                                Advanced
                            </button>
                        </div>
                    }

                    {selectedRows?.length > 0 &&
                        <div className={`flex items-center`}>
                                    <span
                                        className={`text-[12px] text-gray-500 mx-2`}>{selectedRows.length} selected</span>

                            <Button size={`xs`} onClick={handleDelete} color={`red`}>
                                <FontAwesomeIcon icon={faXmark} className="mr-1 h-3 w-3"/>
                                Delete
                            </Button>
                        </div>
                    }
                </div>
                <div className={`flex items-end gap-1`}>
                    {/*Export*/}
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <Tooltip label="Export" withArrow>
                                <MantineButton size={`xs`} variant={`outline`} className={`shadow`}>
                                    <FontAwesomeIcon icon={faFileArrowDown}/>
                                </MantineButton>
                            </Tooltip>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Export</Menu.Label>
                            <Menu.Item onClick={downloadSelectedRows}>
                                Selected rows
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                    {/*Page Size*/}
                    <Select
                        size={`xs`}
                        classNames={{
                            root: 'max-w-[63px]',
                            input: 'shadow',
                        }}
                        data={['20', '30', '40', '50']}
                        label={`Show max`}
                        value={pageSize?.toString()}
                        onChange={setPageSize}
                    />
                </div>
            </div>

            {advanceSearchOpened &&
                <div className={`flex gap-2 items-center flex-wrap mb-2`}>
                    <Menu shadow="md" width={200} position={`bottom-start`}>
                        <Menu.Target>
                            <MantineButton variant={`outline`} size={`xs`} className={`text-sm`}>
                                <FontAwesomeIcon icon={faCog} className={`mr-1`}/>
                                Filter Settings
                            </MantineButton>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item onClick={openCreateFilterModal}>
                                <FontAwesomeIcon icon={faPlus} className={`mr-1`}/>
                                Add Filter
                            </Menu.Item>

                            <Menu.Divider/>

                            {filterRecords?.length > 0 && <Menu.Label>Available Filters</Menu.Label>}

                            {filterRecords.map(filter =>
                                <Menu.Item key={filter.id} onClick={() => {
                                    setEditingFilter(filter)
                                    openEditFilterModal()
                                }}>
                                    {filter.name}
                                </Menu.Item>
                            )}
                        </Menu.Dropdown>
                    </Menu>
                    <button className={`text-xs text-gray-500 underline`} onClick={toggleAdvanceSearch}>
                        Hide Advanced
                    </button>
                </div>
            }
        </>
    )
}