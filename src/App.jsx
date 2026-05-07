import Display from "./Display";
import Button from "./Button";
import {useState} from "react";

const App = () => {
    const [money, setMoney] = useState(0);
    const [convertedMoney, setConvertedMoney] = useState(0);
    const [currencyString, setCurrencyString] = useState("");

    const euroToDollar = (num) => {
        return (num * 1.0902).toFixed(2);
    };

    const euroToPfund = (num) => {
        return (num * 0.8782).toFixed(2);
    };

    const createMoneyButtons = () => {
            const buttonArray = [];
            const moneyArray = [10, 20, 50, 100, 200, 500];

            for (let i = 0; i < moneyArray.length; i++) {
                const button = <Button myText={moneyArray[i]} callBack={() => {
                    null
                    null
                    null
                }}> </Button>;
                buttonArray.push(button);
            }
            return buttonArray;
        }
    ;

    return (
        <div>

            {createMoneyButtons()}

            <Display money={convertedMoney} currency={currencyString}/>

            <Button
                myText={"Dollar"}
                callBack={() => {
                    setConvertedMoney(euroToDollar(money));
                    setCurrencyString("$");
                }}
            />
            <Button
                myText={"Pfund"}
                callBack={() => {
                   setConvertedMoney(euroToPfund(money));
                   setCurrencyString("£");
                }}
            />
            <Button
                myText={"Euro"}
                callBack={() => {
                    setConvertedMoney(money);
                    setCurrencyString("€");
                }}
            />
        </div>
    );
};

export default App;
