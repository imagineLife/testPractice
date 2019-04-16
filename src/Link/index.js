import React from "react"
const Link = ({address, tOrF}) => {
	return (tOrF == true) ? (<a href={address}>Click</a>) : null
}
export default Link;