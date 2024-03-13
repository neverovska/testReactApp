import React, {useState} from "react";
import {ItemsList} from "./ItemsList";
import {ModalCard} from "./ModalCard";
import {useTranslation} from "react-i18next";
import "../styles/Main.css";

export const Main = (props) => {
    const [isModalActive, setModalActive] = useState(false);
    const [fullItem, setFullItem] = useState({});
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(16);

    const {t} = useTranslation();

    function onShowModal(item) {
        setFullItem(item);
        setModalActive(!isModalActive);
    }
    // Обработчик изменения количества элементов на странице
    function handleChange(event) {
        setCount(event.target.value);
        setPage(1);
    }
// Обработчик выбора страницы пагинации
    const selectPageHandler = (selectedPage) => {
        // Проверка, чтобы выбранная страница была в пределах допустимого диапазона и не равнялась текущей странице
        if (selectedPage >= 1 && selectedPage <= props.item.length / 10 && selectedPage !== page) {
            setPage(selectedPage);
        }
    }
    return (
        <main>
            <h1>{t("h")}</h1>
            <ItemsList onShowModal={onShowModal} items={props.item} page={page} count={count}/>
            {isModalActive && <ModalCard onShowModal={onShowModal} item={fullItem}/>}
            <div className="page-settings">
                <select onChange={handleChange} className="select-lang">
                    <option>16</option>
                    <option>24</option>
                    <option>32</option>
                </select>
                {/* Отображения номеров страниц и кнопок для перехода между ними */}
                {props.item.length > 0 && <div className="pagination">
                    {/* Кнопка "Назад" */}
                    <span onClick={() => selectPageHandler(page - 1)}
                          className={page > 1 ? "" : "pagination__disable"}>◀</span>
                    {/* Отображение номеров страниц */}
                    {[...Array(Math.ceil(props.item.length / count))].map((_, i) => {
                        return <span key={i} className={page === i + 1 ? "pagination__selected" : ""}
                                     onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                    })}
                    {/* Кнопка "Вперёд" */}
                    <span onClick={() => selectPageHandler(page + 1)}
                          className={page < Math.ceil(props.item.length / count) ? "" : "pagination__disable"}>▶</span>

                </div>}
            </div>
        </main>
    )
}

