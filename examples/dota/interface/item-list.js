class ItemList extends ReactComponent {
	render() {
		return (
			<ul>
				{items.map((i) => {
					return (
						<li>{i.name}</li>
					);
				})}
			</ul>
		);
	}
}

ReactDOM.render(
	<ItemList />,
	document.getElementById('item-list')
);