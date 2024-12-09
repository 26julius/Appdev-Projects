import Proptypes from 'prop-types'

export default function LisOfFruits(props){
    props
    const listitem = props.items.map( =>
        <li key = (item.id)><strong>(item.name)</strong>: nbsp (item.color)</li>)
}