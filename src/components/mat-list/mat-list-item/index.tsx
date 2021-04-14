import './style.css'

export interface MatImputProps {
    select? : boolean,
}

const MatListItem: React.FC<MatImputProps> = (props) => {

    return (
        <div 
            className={props.select ? "mat-list-item select" : "mat-list-item"}
        >
            {props.children}
        </div>
    );
    
}

export default MatListItem;
