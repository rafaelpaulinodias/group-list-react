import React from 'react';
import MatIconButton from '../../components/mat-icon-button';
import MatList from '../../components/mat-list';
import MatListItem from '../../components/mat-list/mat-list-item';
import './style.css';

const ShowList: React.FC = () => {
    return (
    <>
        <header>
            <h1>List Name</h1>
            {/* <span><MatIconButton icon="add">Adicionar</MatIconButton></span> */}
            <span><MatIconButton icon="edit">Editar</MatIconButton></span>
            <span><MatIconButton icon="delete">Remover</MatIconButton></span>
        </header>
        <MatList>
            <MatListItem>
                <div className="list-item-container">
                    <div className="item-cart-button">
                        <MatIconButton icon="add_shopping_cart" />
                    </div>

                    <div className="item-name">Item 1</div>

                    <div className="item-amout">2</div>

                    <div className="item-totals">
                        <div className="item-price">R$ 5,26</div>
                        <div className="item-total">Total: R$ 10,52</div>
                    </div>
                </div>
            </MatListItem>
            <MatListItem>
                <div className="list-item-container">
                    <div className="item-cart-button">
                        <MatIconButton icon="add_shopping_cart" />
                    </div>

                    <div className="item-name">Item 2</div>

                    <div className="item-amout">1</div>

                    <div className="item-totals">
                        <div className="item-price">R$ 8,97</div>
                        <div className="item-total">Total: R$ 8,97</div>
                    </div>
                </div>
            </MatListItem>
            <MatListItem>
                <div className="list-item-container">
                    <div className="item-cart-button">
                        <MatIconButton icon="add_shopping_cart" />
                    </div>

                    <div className="item-name">Item 3</div>

                    <div className="item-amout">10</div>

                    <div className="item-totals">
                        <div className="item-price">R$ 12,01</div>
                        <div className="item-total">Total: R$ 120,10</div>
                    </div>
                </div>
            </MatListItem>
            <MatListItem>
                <div className="list-item-container">
                    <div className="item-cart-button">
                        <MatIconButton icon="add_shopping_cart" />
                    </div>

                    <div className="item-name">Item 4</div>

                    <div className="item-amout">4</div>

                    <div className="item-totals">
                        <div className="item-price">R$ 1,25</div>
                        <div className="item-total">Total: R$ 5,00</div>
                    </div>
                </div>
            </MatListItem>
            <MatListItem>
                <div className="list-item-container">
                    <div className="item-cart-button">
                        <MatIconButton icon="add_shopping_cart" />
                    </div>

                    <div className="item-name">Item 5</div>

                    <div className="item-amout">2</div>

                    <div className="item-totals">
                        <div className="item-price">R$ 40,00</div>
                        <div className="item-total">Total: R$ 80,00</div>
                    </div>
                </div>
            </MatListItem>
            <MatListItem>
                <div className="list-item-container">
                    <div className="item-cart-button">
                        <MatIconButton icon="add_shopping_cart" />
                    </div>

                    <div className="item-name">Item 6</div>

                    <div className="item-amout">1</div>

                    <div className="item-totals">
                        <div className="item-price">R$ 6,89</div>
                        <div className="item-total">Total: R$ 6,89</div>
                    </div>
                </div>
            </MatListItem>
        </MatList>
    </>
    );
}

export default ShowList;