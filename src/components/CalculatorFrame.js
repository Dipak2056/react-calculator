import React, {useState} from 'react';
import { Display } from './Display';
import {Button} from './Button';


const buttons = [
    {cls:'clear',label:'AC'},
    {cls:'clean',label:'C'},
    {cls:'divide',label:'/'},
    {cls:'multi',label:'*'},
    {cls:'plus',label:'+'},
    {cls:'minus',label:'-'},
    {cls:'no-7',label:'7'},
    {cls:'no-8',label:'8'},
    {cls:'no-9',label:'9'},
    {cls:'no-6',label:'6'},
    {cls:'no-5',label:'5'},
    {cls:'no-4',label:'4'},
    {cls:'no-3',label:'3'},
    {cls:'no-2',label:'2'},
    {cls:'no-1',label:'1'},
    {cls:'no-0',label:'0'},
    {cls:'dot',label:'.'},
    {cls:'ans',label:'='}];
    
    export const CalculatorFrame =() => {
        const [textToDisplay,setTextToDisplay] = useState('');

        const handleOnClick = (value) => {
            let str = textToDisplay + value;
            
            if (value === '=') {
                return onTotal();
            }

            if (value === 'C'){
                str = '';
            }




            setTextToDisplay(str);
            const onTotal = () => {
               const ttl = eval(textToDisplay);
               setTextToDisplay(ttl);
            }
        };

        return (
            <div className='mainParent'>
                {/* here we have used textToDisp  as a props which will be sent to the child component and it will be used there, in this case we have used that in the display comp or screen*/}
                <Display textToDisp = {textToDisplay} />
                <div className="items">
                    {
                        buttons.map((item,i)=>{
                            return <Button key={i} item={item} handleOnClick ={handleOnClick} />
                        })
                    }
                </div>
            </div>
        );

    }

  