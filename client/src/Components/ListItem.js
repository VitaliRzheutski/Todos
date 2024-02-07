const ListItem = ({ task }) => {
    return (
        <div className="lists-item">
            <p>{task.title}</p>
        </div>
    );
}

export default ListItem;
