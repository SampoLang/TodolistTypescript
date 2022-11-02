import React from "react";
import { Todotableprops, Todo } from "../interfaces";
import '../App.css';

function Todotable(props: Todotableprops) {
    return (
        <div className="Table">
            <table>
                <tbody>
                    <tr>
                        <td>Description</td>
                        <td>Date</td>
                        <td>Priotiry</td>
                    </tr>
                    {
                        props.todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.description}</td>
                                <td>{todo.date}</td>
                                <td>{todo.priority}
                                    <input type="button" onClick={() => props.deletetodo(index)} value="Delete" />
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Todotable;