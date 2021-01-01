import { useState } from "react";
import { Input, Button } from "semantic-ui-react";

import { advancedSearch } from "./api/mtg-api";
import "./CardSearch.scss";

const CardSearch = (props) => {
    const [cardName, setCardName] = useState("");
    const [cardList, setCardList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCardList = async () => {
        setIsLoading(true);
        const cardList = await advancedSearch({
            sort: "name",
            limit: 100,
            offset: 0,
            filters: [
                { name: "ProductName", values: ["Jace, the Mind Sculptor"] },
            ],
        });
        setCardList(cardList);
        setIsLoading(false);
    };
    return (
        <div className="card-search">
            <Input placeholder="Search card" onChange={setCardName} />
            <Button
                className="card-search-button"
                primary
                onClick={fetchCardList}
            >
                Search
            </Button>
            <div className="card-search-results">
                {cardList.map((card) => card)}
            </div>
        </div>
    );
};

export default CardSearch;
