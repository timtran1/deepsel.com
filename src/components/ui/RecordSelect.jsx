import {useEffect, useState} from 'react';
import {InputBase, Combobox, useCombobox, CloseButton} from '@mantine/core';
import useModel from "../../api/useModel.jsx";


export default function RecordSelect(props) {
    const {
        label,
        placeholder,
        required,
        model,
        value: initialValue,
        onChange,
        searchFields = ['name'],
        renderOption,
        displayField = 'name',
        initialDisplayValue,
    } = props

    const {data, searchTerm, setSearchTerm} = useModel(model, {
        autoFetch: true,
        pageSize: 5,
        searchFields,
    })

    const [value, setValue] = useState(initialValue || [])

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    })

    const options = data.map(item =>
        renderOption ? renderOption(item) : (
            <Combobox.Option value={item.id} key={item.id}>
                {item[displayField]}
            </Combobox.Option>
        ))

    // run once on mount, set searchTerm to display name of initial value
    useEffect(() => {
        if (data.length> 0 && initialValue) {
            const initialRecord = data.find(item => item.id === initialValue)
            if (initialRecord) {
                setSearchTerm(initialRecord[displayField])
            }
        }
    }, [data, initialValue])

    function clear() {
        setValue(null)
        setSearchTerm('')
        onChange(null)
    }

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={val => {
                // on select an option
                // set value to its id, and searchTerm to its display name
                onChange(val)
                setValue(val)
                setSearchTerm(data.find(item => item.id === val)[displayField])
                combobox.closeDropdown()
            }}
        >
            <Combobox.Target>
                <InputBase
                    onClick={() => combobox.openDropdown()}
                    onFocus={() => combobox.openDropdown()}
                    onBlur={() => {
                        combobox.closeDropdown();
                        // when focus away
                        // if value is in data, set searchTerm to its display name, else clear searchTerm
                        setSearchTerm(value ? data.find(item => item.id === value)[displayField] : '')
                    }}
                    label={label}
                    placeholder={placeholder}
                    value={searchTerm}
                    required={required}
                    onChange={(event) => {
                        // when user types
                        // set searchTerm to input value
                        combobox.updateSelectedOptionIndex();
                        setSearchTerm(event.currentTarget.value)
                    }}
                    rightSection={
                        value !== null ? (
                            <CloseButton
                                size="sm"
                                onMouseDown={(event) => event.preventDefault()}
                                onClick={clear}
                                aria-label="Clear value"
                            />
                        ) : (
                            <Combobox.Chevron/>
                        )
                    }
                    rightSectionPointerEvents={value === null ? 'none' : 'all'}
                />
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>
                    {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    )
}