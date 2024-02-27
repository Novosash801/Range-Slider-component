import { useState }  from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';

import './AppSlider.scss';

const AppSlider = () => {

    const yearsNumber = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
    const monthNumber = ['2015', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек', '2016', '2017'];
    const UpdateArray = () => {
        monthNumber.splice(11, 0, 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек')
    }

    const [minValue, setMinValueForChange] = useState(0);
    const [maxValue, setMaxValueforChange] = useState(0);

    const [minValue2, setMinValueForChange2] = useState(0);
    const [maxValue2, setMaxValueforChange2] = useState(0);
   
    const monthNames = [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
    ];

    const yearDays = 2555 + (new Date(2014, 0, 1).getFullYear() % 4 === 0 ? 1 : 0);
    const yearDays2 = 730 + (new Date(2015, 0, 1).getFullYear() % 4 === 0 ? 1 : 0);

    const [minMonthCaption1, set_minMonthCaption] = useState('');
    const [maxMonthCaption1, set_maxMonthCaption] = useState('');

    const [minMonthCaption2, set_minMonthCaption2] = useState('');
    const [maxMonthCaption2, set_maxMonthCaption2] = useState('');

    const formatDate = (date: Date): string => {
        let dateStr = '';
        let m = date.getMonth();
        let y = date.getFullYear();
        dateStr = monthNames[m] + ' ' + y;
        return dateStr;
    };

    const handleDateChange = (e: ChangeResult) => {
        let d = new Date(2014, 0, 1);
        let d1 = new Date(d.getFullYear(), 0, 1);
        let d2 = new Date(d.getFullYear(), 0, 1);

        d1.setDate(e.minValue + 1);
        d2.setDate(e.maxValue + 1);

        set_minMonthCaption(formatDate(d1));
        set_maxMonthCaption(formatDate(d2));
    };

    const handleDateChange2 = (e: ChangeResult) => {
        let d = new Date(2015, 0, 1);
        let dd1 = new Date(d.getFullYear(), 0, 1);
        let dd2 = new Date(d.getFullYear(), 0, 1);

        dd1.setDate(e.minValue + 1);
        dd2.setDate(e.maxValue + 1);

        set_minMonthCaption2(formatDate(dd1));
        set_maxMonthCaption2(formatDate(dd2));
    };

    const [show, setShow] = useState(false);
    

    return (
        <div className="app__slider">
            <div className="app__slider__switcher">
                <button onClick={() => setShow(true) }>Все года</button>
                <button onClick={() => setShow(false)}>Месяцы</button>
            </div>
           
            <div className='multi-range-slider-container'>
            
            {show ?
                <div className="app__slider-first">
                     <MultiRangeSlider
                        labels={yearsNumber}
                        min={0}
                        max={yearDays + 1}
                        minValue={yearDays - 2050}
                        maxValue={yearDays - 1200}
                        step={1}
                        ruler={false}
                        minCaption={minMonthCaption1}
                        maxCaption={maxMonthCaption1}
                        onInput={handleDateChange}
                        onChange={(e: ChangeResult) => {
                            setMinValueForChange(e.minValue);
                            setMaxValueforChange(e.maxValue);
                        }}
                        
                    />
                    {/* <div className="div__onInput">
                        <div>onInput :</div>
                        <div>
                            <span>
                                {minMonthCaption1}:  {maxMonthCaption1}
                            </span>
                        </div>
                    </div>
                    <div className="div__onChange">
                        <div>onChangeToDays :</div>
                        <div>
                            <span>{minValue}-</span>
                            <span>{maxValue}</span>
                        </div>
                    </div> */}
                </div> : <div className="app__slider-second">
                <MultiRangeSlider
                        labels={monthNumber}
                        min={0}
                        max={yearDays2 + 1}
                        minValue={(yearDays2 - 600)}
                        maxValue={yearDays2 - 332}
                        step={1}
                        minCaption={minMonthCaption2}
                        maxCaption={maxMonthCaption2}
                        ruler={false}
                        onInput={handleDateChange2}
                        onChange={(e: ChangeResult) => {
                            setMinValueForChange2(e.minValue);
                            setMaxValueforChange2(e.maxValue);
                        }}
                    />
                    </div>}
                
                    {/* <div className="div__onInput">
                        <div>onInput :</div>
                        <div>
                            <span>
                                {minMonthCaption2}:  {maxMonthCaption2}
                            </span>
                        </div>
                    </div>
                    <div className="div__onChange">
                        <div>onChangeToDays :</div>
                        <div>
                            <span>{minValue2}-</span>
                            <span>{maxValue2}</span>
                        </div>
                    </div> */}
                
            </div>
        </div>
    );
};

export default AppSlider;