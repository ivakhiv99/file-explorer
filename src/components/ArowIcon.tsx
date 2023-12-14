import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { FC } from 'react'
import styled from 'styled-components'

const ClosedArrow = styled(KeyboardArrowRightIcon)`
	position: absolute;
	left: -15px;
	color: #999;
`

const OpenArrow = styled(KeyboardArrowRightIcon)`
	position: absolute;
	left: -15px;
	transform: rotateZ(90deg);
`

interface IArowIcon {
	isOpen: boolean
}

const ArowIcon: FC<IArowIcon> = ({ isOpen }) =>
	isOpen ? <OpenArrow /> : <ClosedArrow />

export default ArowIcon
