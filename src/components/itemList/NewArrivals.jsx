import React, { useState } from 'react'
import '../../styles/reset.css'
import './newArrivals.css'

const itemList = [
    {
        id: 1,
        content: 'Le chiquito moyen small leather bag',
        price: '641.81$',
        alt: '흰색 가방'
    },
    {
        id: 2,
        content: 'Le chiquitoMini leather bag',
        price: '638.98$',
        alt: '손잡이가 큰 진한 주황색 가방'
    },
    {
        id: 3,
        content: 'Le chiquito long Chiquito long version.',
        price: '623.62$',
        alt: '주황색과 갈색 사이의 끈이 있는 가방'
    },
    {
        id: 4,
        content: 'Le chiquito long chiquito long version',
        price: '624.14$',
        alt: '노란색 가방'
    },
    {
        id: 5,
        content: 'Le chiquito mini leather bag',
        price: '515.07$',
        alt: '손잡이가 큰 주황색 가방'
    },
    {
        id: 6,
        content: 'Le chiquito moyen small leather ba',
        price: '636.25$',
        alt: '손잡이가 큰 연한 주황색 가방'
    },
    {
        id: 7,
        content: 'Le grand chiquito leather bag.',
        price: '757.12$',
        alt: '손잡이가 큰 갈색 가방'
    },
];

export default function NewArrivals(props) {
    const [sortByPrice, setSortByPrice] = useState(null);
    const [sortById, setSortById] = useState(null);

    const sortItemsByPrice = () => {
        if (sortByPrice === 'ascending') {
            itemList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

            setSortByPrice('descending');
        } else {
            itemList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            setSortByPrice('ascending');
        }
        setSortById(null); // id 정렬 상태 초기화
    };

    const sortItemsById = () => {
        if (sortById === 'ascending') {
            itemList.sort((a, b) => a.id - b.id);
            setSortById('descending');
        } else {
            itemList.sort((a, b) => b.id - a.id);
            setSortById('ascending');
        }
        setSortByPrice(null); // price 정렬 상태 초기화
    };

    const getPriceButtonText = () => {
        if (sortByPrice === 'ascending') {
            return '가격이 비싼 상품부터';
        } else if (sortByPrice === 'descending') {
            return '가격이 저렴한 상품부터';
        } else {
            return '가격 순서대로 보기';
        }
    };

    const getIdButtonText = () => {
        if (sortById === 'ascending') {
            return '처음 등록된 상품부터 보기';
        } else if (sortById === 'descending') {
            return '최신 등록 상품 순서보기';
        } else {
            return '상품 등록';
        }
    };

    return (
        <div className='contain'>
            <header>
                <h1>New Arrivals</h1>
                <div className='textArea'>
                    <p>Each collection tells a precise story about a unique Jacquemus girl—whether she’s a factory worker, nurse, or ’90s pop idol. jacquemus apparel is designed for exceptional, confident women who like to stand out in a crow</p>
                    <div className="Buttons">
                        <button onClick={sortItemsById}>{getIdButtonText()}</button>
                        <button onClick={sortItemsByPrice}>{getPriceButtonText()}</button>
                    </div>
                </div>
            </header>
            <div className='itemListContainer'>
                {itemList.map((item) => (
                    <article className='itemBox' key={item.id}>
                        <img className='itemImg' src={`/images/new_arrivals_item${item.id}.png`} alt={item.alt} />
                        <p className='itemContent'>{item.content}</p>
                        <p className='itemPrice'>{item.price}</p>
                    </article>
                ))}
                <div>
                    <img src={`/images/new_arrivals_item8.png`} alt="제품추가" />
                </div>
            </div>
        </div>
    )
}