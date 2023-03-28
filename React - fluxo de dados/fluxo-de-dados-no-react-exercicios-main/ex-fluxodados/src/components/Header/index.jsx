import { TitleHeader, UserInfo } from './styled'

export const Header = (props) => {

    return (
        <>
            <TitleHeader>
                InstAlmeida
            </TitleHeader>
            {props.pageFlow == 2 ? (<UserInfo>
                <img src={props.photo} alt="" />
                <h3>{props.name}</h3>
            </UserInfo>) : ('')
            }
        </>
    )
}