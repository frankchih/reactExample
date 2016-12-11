
class TodoHeader extends React.Component {
  render() {
    const {
      title,
      username,
      todoCount
    } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <span>哈囉，{username}：你有 {todoCount} 項未完成待辦事項</span>
      </div>
    );
  }
}

TodoHeader.propTypes = {
  title: React.PropTypes.string, 
  username: React.PropTypes.string, 
  todoCount: React.PropTypes.number,
}

TodoHeader.defaultProps = {
  title: '我的代辦事項', 
  username: 'Guest', 
  todoCount: '0',
}

window.App.TodoHeader = TodoHeader;