interface Props {
    children?: string;
    //optional
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>
            {children} Button
        </button>
    );
}
export default Button;