import React from 'react'
import Navbar from './Navbar'

const Plans = () => {
  return (
    <>
    <Navbar/>
    <div id="priceplan">
        <article>
            <h3>Price Plans</h3>
            <table>
                <thead>
                    <tr>
                        <th ClassName="hide"></th>
                        <th ClassName="Free"></th>
                        <th ClassName="Standard"></th>
                        <th ClassName="Premium"></th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>Monthly price</td>
                        <td ClassName="default">
                            <span ClassName="txt-top">&#8377</span>
                            <span ClassName="text-side">0</span>
                        </td>
                        <td>
                            <span ClassName="text-top"></span>
                            <span ClassName="text-side"></span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="txt-top">&#8377</span>
                            <span ClassName="text-side">200</span>
                        </td>
                        <td>
                            <span ClassName="text-top"></span>
                            <span ClassName="text-side"></span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="txt-top">&#8377</span>
                            <span ClassName="text-side">500</span>
                        </td>

                    </tr>

                    <tr>
                        <td>Streaming on upto 3 devices</td>
                        <td ClassName="default">
                            <span ClassName="tick">&#10004;</span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="tick">&#10004;</span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="tick">&#10004;</span>
                        </td>

                    </tr>
                    <tr>
                        <td>Adfree experience</td>
                        <td ClassName="default">
                            <span ClassName="wrong">&#10006;</span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="tick">&#10004;</span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="tick">&#10004;</span>
                        </td>

                    </tr>
                    <tr>
                        <td>High Quality</td>
                        <td ClassName="default">
                            <span ClassName="wrong">&#10006;</span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="tick">&#10004;</span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="tick">&#10004;</span>
                        </td>

                    </tr>
                    <tr>
                        <td>Ultra High Quality</td>
                        <td ClassName="default">
                            <span ClassName="wrong">&#10006;</span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="wrong">&#10006;</span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="tick">&#10004;</span>
                        </td>

                    </tr>
                    <tr>
                        <td>Offline downloads</td>
                        <td ClassName="default">
                            <span ClassName="wrong">&#10006;</span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="wrong">&#10006;</span>
                        </td>
                        <td ClassName="default">
                            <span ClassName="tick">&#10004;</span>
                        </td>

                    </tr>
                </tbody>
            </table>

        </article>
    </div>
    </>
  )
}

export default Plans