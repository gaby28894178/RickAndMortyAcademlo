import React, { useEffect } from 'react'
import '../styles/ResidentCard.css'
import useFetch from '../../hooks/useFetch'
const ResidentCard = ({url}) =>  {

  const [resident,getResident] = useFetch(url)

  useEffect(()=>{
    getResident(url)
  },[url])
  console.log(resident)


  return (
    <article className='resident'>
      <header className='resident__header'>
        <img className='resident__image' src={resident?.image} alt="" />
        <div className='resident__status__conteiner'>
        <div className={`resident__status__circule ${resident?.status}`}></div>
        {/* <div className='resident__status' style={{ color: resident?.status ? 'yellow' : 'red' }}>
        {resident?.status ? 'Alive' : 'Dead'}   </div> */}
        <div className='resident__status' >{resident?.status}</div>
        </div>
       </header>
       <section className='resident__body' >
        <h3 className='resident__name' >{resident?.name}</h3>
        <hr className='resident__hr' />
        <ul className='resident__list'>    
          <li className='resident__item'><span   className='resident__label'>Especies ..</span>
          <span   className='resident__value'>{resident?.species}</span></li>
          <li className='resident__item'><span className='resident__label'>Origin. </span>
          <span   className='resident__value'>{resident?.origin.name}</span></li>
          <li className='resident__item'><span   className='resident__label'>Eppisodes</span>
          <span   className='resident__value'>{resident?.episode.length}</span></li>
        </ul>
       </section>
    </article>
  );

}

export default ResidentCard
