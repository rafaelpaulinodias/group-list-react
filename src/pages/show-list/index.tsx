import React, { useState } from 'react';
import ClickNHold from 'react-click-n-hold';
import MatIconButton from '../../components/mat-icon-button';
import MatButton from '../../components/mat-button';
import MatDialog from '../../components/mat-dialog';
import MatImput from '../../components/mat-input';
import MatList from '../../components/mat-list';
import MatListItem from '../../components/mat-list/mat-list-item';
import { Item } from '../../model/item';
import { MarketList } from '../../model/market-list';
import './style.css';

const ShowList: React.FC = () => {

    let newList = new MarketList("Minha Lista")
    newList.add(new Item("Milho", 3, 1.25));
    newList.add(new Item("Uva", 1, 6.82));
    newList.add(new Item("Maçã", 10, 7.88));
    newList.add(new Item("Pêra", 3, 3.65));

    const [selectedItem, setSelectedItem] = useState(new Item());

    const [hasSelectedItem, setHasSelectedItem] = useState(false);
    
    const [list, setList] = useState(newList);

    const onListItemClick = () => {
        setHasSelectedItem(false);
        setSelectedItem(new Item())
    }

    const onListItemClickAndHold = (item: Item) => {
        setSelectedItem(item);
        setHasSelectedItem(true);
    }

    const onRemoveButtonClick = () => {
        list.remove(selectedItem);
        setSelectedItem(new Item());
        setHasSelectedItem(false);
        setList(list);
    }

    

    const Items = list.items.map((item) => 
        <ClickNHold time={1} onClickNHold={()=>onListItemClickAndHold(item)} >
            <MatListItem
                key={list.items.indexOf(item)}
                select={hasSelectedItem && (selectedItem.name === item.name)}>
                
                <div className="list-item-container" onClick={()=>onListItemClick()}>
                    <div className="item-cart-button">
                        <MatIconButton icon="add_shopping_cart" />
                    </div>

                    <div className="item-name"  >{item.name}</div>

                    <div className="item-amout">{item.amount}</div>

                    <div className="item-totals">
                        <div className="item-price">R$ {item.price}</div>
                        <div className="item-total">Total: R$ {item.total}</div>
                    </div>
                </div>

            </MatListItem>
        </ClickNHold>
    );

    return (
    <section className="market-list">
    
        <header>
            <h1>{list.name}</h1>
            { hasSelectedItem &&
                <span>
                    <MatIconButton
                        icon="delete"
                        buttonClick={onRemoveButtonClick}>
                        Remover
                    </MatIconButton>
                </span>
            }
        </header>
        
        <fieldset>
            <div className="name">
                <MatImput name="name" label="Item" value={selectedItem.name}/>
            </div>
            <div className="amount">
                <MatImput name="amount" label="qnt" value={selectedItem.amount.toString()}/>
            </div>
            <div className="price">
                <MatImput name="price" label="preço" value={selectedItem.price.toString()}/>
            </div>
        </fieldset>
        
        <MatList>
            {Items}
        </MatList>

    </section>
    );
}

export default ShowList;