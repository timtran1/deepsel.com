import {faFileLines} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Indicator, Menu, Modal} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconDownload, IconEye} from '@tabler/icons-react';
import {forwardRef} from 'react';
import {useTranslation} from 'react-i18next';
import documentIcon from '../../assets/images/document.png';
import imageIcon from '../../assets/images/placeholder.png';
import BackendHostURLState from '../stores/BackendHostURLState.js';
import {
  downloadFromAttachUrl,
  getAttachmentUrl,
  getFileExtension,
  getFileNameFromAttachUrl,
} from '../utils/index.js';
import H2 from './H2.jsx';

function PdfDisplay({
  backendHost,
  src,
  width,
  height,
  onViewMenuClick = () => {},
}) {
  const {t} = useTranslation();
  return (
    <Menu withArrow offset={4}>
      <Menu.Target>
        <OtherFileDisplay
          disabledLink
          width={width}
          height={height}
          backendHost={backendHost}
          src={src}
        />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconEye className="w-6" />}
          onClick={onViewMenuClick}
        >
          {t('View')}
        </Menu.Item>
        <Menu.Item
          leftSection={<IconDownload className="w-5" />}
          component="a"
          onClick={() =>
            downloadFromAttachUrl(getAttachmentUrl(backendHost, src))
          }
          download={getFileNameFromAttachUrl(src)}
        >
          {t('Download')}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

const OtherFileDisplay = forwardRef((props, ref) => {
  const {
    backendHost,
    src,
    width,
    height,
    disabledLink = false,
    ...otherProps
  } = props;

  return (
    <a
      ref={ref}
      {...otherProps}
      className="flex items-end cursor-pointer text-primary-main"
      href={disabledLink ? null : getAttachmentUrl(backendHost, src)}
      target="_blank"
      rel={'noreferrer'}
      download
    >
      <Indicator label={getFileExtension(src).toUpperCase()} size={15}>
        <FontAwesomeIcon
          icon={faFileLines}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        />
      </Indicator>
      <div className="ml-2 !underline">{getFileNameFromAttachUrl(src)}</div>
    </a>
  );
});

export default function FileDisplay(props) {
  const {label = '', alt = 'Image', width = 40, height = 40, src, type} = props;
  const {t} = useTranslation();

  let {placeholder} = props;
  if (!placeholder) {
    placeholder = type === 'image' ? imageIcon : documentIcon;
  }
  const {backendHost} = BackendHostURLState((state) => state);
  const [opened, {open, close}] = useDisclosure();

  return (
    <div className={`relative`}>
      {label && (
        <div
          style={{
            fontSize: `var(--input-label-size,var(--mantine-font-size-sm))`,
            fontWeight: 500,
            marginBottom: '0.5rem',
          }}
        >
          {label}
        </div>
      )}

      {src ? (
        type === 'image' ? (
          <img
            src={getAttachmentUrl(backendHost, src)}
            alt={alt}
            width={width}
            height={height}
          />
        ) : getFileExtension(src).toLowerCase() === 'pdf' ? (
          <PdfDisplay
            width={width}
            height={height}
            backendHost={backendHost}
            src={src}
            onViewMenuClick={open}
          />
        ) : (
          <OtherFileDisplay
            width={width}
            height={height}
            backendHost={backendHost}
            src={src}
          />
        )
      ) : (
        <img
          src={placeholder}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
        />
      )}

      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        title={<H2>{t('PDF Preview')}</H2>}
      >
        <iframe
          src={getAttachmentUrl(backendHost, src)}
          className="!w-full h-[calc(100vh-60px-16px)]"
          title="Document Preview"
        />
      </Modal>
    </div>
  );
}
