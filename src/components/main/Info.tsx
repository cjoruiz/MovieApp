import { useNavigate } from "react-router-dom";
import {useContext} from 'react';
import{FaRegPlayCircle,FaStar} from "react-icons/fa";
import { ContainerInfo,MiniAvatar,ButtonBuy } from "../styled.components";
import Thor from "../../assets/Thor.png";
import { Context } from "../../context/AppContext";

const Info=()=>{
    const history=useNavigate();
    const{state}=useContext(Context);
    const goToDetails=():void=>{
    history('./detail/2');
}

    return(<>
        <ContainerInfo height={50}>
            <section className="icon-info">
            <FaRegPlayCircle size={25} color={'red'}/>
            </section>
            <section className='title-info'>
                {state?.name}
            </section>
            <section className="details-info">
                <section className="list">
                    <div>2020</div>
                    <div>Fantastic</div>
                    <div>{state?.time}</div>
                </section>
            </section>
            <section className="star">
                <FaStar color='orange'/>
                <FaStar color='orange'/>
                <FaStar color='orange'/>
                <FaStar color='orange'/>
                <FaStar color='orange'/>
            </section>
            <section className="description">
                <div className="description-title">Plot Sumary</div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officiis iusto saepe excepturi possimus commodi facere aspernatur perferendis maiores magnam illum inventore id unde amet, rem tenetur nulla ipsa voluptates.</div>
            </section>
            <section className="description">
                <div className="description-title">Cast</div>
                <div className="images">
                {[1,2,3,4].map(item=>
                    <MiniAvatar key={item} src={Thor}/>
                    // <div className="description-title">texto</div>
                    // <div className="desc">texto</div>
                    )}
                </div>
            </section>
            <section className="button-buy">
                <ButtonBuy onClick={goToDetails}>Comprar</ButtonBuy>
            </section>
        </ContainerInfo>
    </>)
};

export default Info;