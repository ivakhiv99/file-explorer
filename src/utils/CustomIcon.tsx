import { FC } from 'react'
import { styled } from 'styled-components'

const IconContainer = styled.div`
	background-color: red;
	width: 25px;
	margin: 0 5px;
`

interface ICustomIcon {
	//TODO:refactor this
	children: any
}

//TODO: delete this?
const CustomIcon: FC<ICustomIcon> = ({ children }) => (
	<IconContainer>{children}</IconContainer>
)

export default CustomIcon
