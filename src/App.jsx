import Display from "./Display";
import Button from "./Button";
import {useState} from "react";

export default function App () {

    // value in euros
    const [money, setMoney] = useState(0);

    // value in alternative currency
    const [convertedMoney, setConvertedMoney] = useState(0);

    // string to specify currency
    const [currencyString, setCurrencyString] = useState("");

    const euroToDollar = (num) => {
        return (num * 1.0902).toFixed(2);
    };

    const euroToPfund = (num) => {
        return (num * 0.8782).toFixed(2);
    };

    function createMoneyButtons () {
            const moneyArray = [10, 20, 50, 100, 200, 500];

            // either use parentheses () with IMPLICIT return (requires no "return")
            // or use curly braces {}, that require "return" to be written EXPLICITLY in front of <Button.../>
            return moneyArray.map((item, index) => (
                 <Button
                    key={index}
                    myText={item}

                     // when pressing one of the buttons, money and converted money are initially set to chosen value
                     // euro is selected as unit per default
                    callBack={() => {
                        setMoney(moneyArray[index]);
                        setConvertedMoney(moneyArray[index]);
                        setCurrencyString("€");
                    }}
                />
            ));
    }

    return (
        <div>
            {/*create buttons to select amount*/}
            {createMoneyButtons()}

            {/*display initial amount of money*/}
            <Display money={money} currency={"€"}/>

            {/*display converted value of money*/}
            <Display money={convertedMoney} currency={currencyString}/>

            {/*button to convert money to dollars*/}
            <Button
                myText={"Dollar"}
                callBack={() => {
                    setConvertedMoney(euroToDollar(money));
                    setCurrencyString("$");
                }}
            />

            {/*button to convert money to pounds*/}
            <Button
                myText={"Pfund"}
                callBack={() => {
                   setConvertedMoney(euroToPfund(money));
                   setCurrencyString("£");
                }}
            />

            {/*button to convert money to euros*/}
            <Button
                myText={"Euro"}
                callBack={() => {
                    setConvertedMoney(money);
                    setCurrencyString("€");
                }}
            />
        </div>
    );
}