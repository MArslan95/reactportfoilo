import React ,{useEffect,useState} from 'react'
import PortfoiloList from '../portfoilolist/PortfoiloList'
import {featuredPortfolio,webPortfolio,mobilePortfolio,designPortfolio} from '../../data'
// Scss File
import './portfoilo.scss'
export default function Portfoilo() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title:"Featured"
        },
        {
            id: "webapp",
            title:"Web App"
        },
        {
            id: "mobileapp",
            title:"Mobile App"
        },
        {
            id: "design",
            title:"Design"
        },
        {
            id: "content",
            title:"Content"
        },
    ]
    useEffect(() => {
        switch (selected) {
            case "featured": setData(featuredPortfolio);
                break;
            case "webapp": setData(webPortfolio);
                break;
            case "mobileapp": setData(mobilePortfolio);
                break;
            case "design": setData(designPortfolio);
                break;
            default: setData(featuredPortfolio);
        }
        
    },[selected])

    return (
        <div className="portfoilo" id="portfoilo">
            <h1>Portfoilo</h1>
            <ul>
                {
                    list.map((item) =>(
                        <PortfoiloList title={item.title} active={selected === item.id}
                            setSelected={setSelected} id={item.id} />
                    ))
               }
            </ul>
            <div className="container">
                {data.map((d) =>
                      <div className="item">
                    <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                </div>
                )}
              
            </div>
        </div>
    )
}
