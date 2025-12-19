import {getRecipeFromMistral} from "./ai"
import React from "react"
import Markdown from 'react-markdown'
export default function ClaudeRecipeComponent(props) {
    return (
    <section className="suggested-recipe-container">

            <Markdown>{props.recipe}</Markdown>
    </section>)
}