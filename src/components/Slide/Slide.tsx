import { Slide as TSlide} from '../../types/types';
import classNames from 'classnames';

type SlideProps = {
    className?: string;
}

function Slide({className}: SlideProps) {
    return (
        <div className={classNames("slide", className)}></div>
    )
}

export default Slide;
