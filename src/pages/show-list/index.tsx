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

    const [inputItemName, setInputItemName] = useState('');
    const [inputItemAmount, setInputItemAmount] = useState('0');
    const [inputItemPrice, setInputItemPrice] = useState('0');
    
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

    const chageInputName = (event: React.ChangeEvent<HTMLInputElement>) => setInputItemName(event.target.value);
    const chageInputAmount = (event: React.ChangeEvent<HTMLInputElement>) => setInputItemAmount(event.target.value);
    const chageInputPrice = (event: React.ChangeEvent<HTMLInputElement>) => setInputItemPrice(event.target.value);

    const Items = list.items.map((item) => 
        
        <MatListItem key={list.items.indexOf(item) + 1} select={hasSelectedItem && (selectedItem.name === item.name)}>
            <ClickNHold  time={1} onClickNHold={()=>onListItemClickAndHold(item)} >
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
            </ClickNHold>
        </MatListItem>
        
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
                <MatImput name="name" label="Item" onChange={chageInputName.bind(this)} value={inputItemName}/>
            </div>
            <div className="amount">
                <MatImput name="amount" label="qnt" onChange={chageInputAmount.bind(this)} value={inputItemAmount}/>
            </div>
            <div className="price">
                <MatImput name="price" label="preço" onChange={chageInputPrice.bind(this)} value={inputItemPrice}/>
            </div>
        </fieldset>
        
        <MatList>
            {Items}
        </MatList>

    </section>
    );
}

export default ShowList;