import style from './smallCountry.module.css'

export const SmallCountry = ({ name, img, id }) => {
    return (
        <div>
            <div>
                <img className={style.imgContainer} src={img} />
                <p className={style.text}>{name}</p>
                <p>{id}</p>
            </div>
        </div>
    )
}

