import { useState } from "react";
import { Input, Button, Loader } from "semantic-ui-react";

import { advancedSearch } from "./api/mtg-api";
import "./CardSearch.scss";

const CardSearch = (props) => {
    const [cardName, setCardName] = useState("");
    const [cardList, setCardList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCardList = async () => {
        setIsLoading(true);
        setError(null);
        const { productDetailsList, error } = await advancedSearch({
            sort: "name",
            limit: 100,
            offset: 0,
            filters: [{ name: "ProductName", values: [cardName] }],
        });

        if (error) {
            setError(error);
        } else if (productDetailsList) {
            setCardList(productDetailsList);
        }
        setIsLoading(false);
    };
    return (
        <div className="card-search">
            {error && <div className="error-message">{error.message}</div>}
            <Input
                placeholder="Search card"
                onChange={(_, data) => setCardName(data.value)}
            />
            <Button
                className="card-search-button"
                primary
                onClick={fetchCardList}
            >
                Search
            </Button>
            <div className="card-search-results">
                <Loader active={isLoading} inline="centered" />
                {cardList.map((card) => (
                    <div key={card.productId}>
                        <a href={card.url} target="_blank">
                            {card.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSearch;
