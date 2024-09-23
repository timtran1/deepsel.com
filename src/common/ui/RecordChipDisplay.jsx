import {Link} from 'react-router-dom';
import Chip from './Chip.jsx';

export default function RecordChipDisplay({name, linkTo, children}) {
  return (
    <Link
      to={linkTo}
      className="cursor-pointer text-primary-main"
      style={{
        fontSize: `var(--mantine-font-size-sm)`,
      }}
    >
      <Chip size={`xs`} variant="outline" checked={false}>
        {name || children}
      </Chip>
    </Link>
  );
}
