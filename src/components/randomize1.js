import React from "react";
import { useState } from "react";

export default function Randomize1() {

    let numBlocks = 6;
    let blockSize = 4;
    const [randomization, setRandomization] = useState([])

    const submitRunClick = () => {

        function createBlockRandomization(numBlocks, blockSize) {
            let blockRandomization = [];
            for (let i = 0; i < numBlocks; i++) {
                let block = [];
                // Fill the block with equal numbers of each group
                for (let j = 0; j < blockSize / blockSize; j++) {
                    block.push('purple1')
                    block.push('purple2')
                    block.push('purple3')
                    block.push('purple4')
                }
                // Shuffle the block
                block = shuffleArray(block);
                blockRandomization = blockRandomization.concat(block);
            }

            // console.log(blockRandomization)

            let outArray = [' ', ' ', ' ', 'Treatme', 'nts', ' '];
            let num = 0
            for (let k = 0; k < blockRandomization.length; k++) {
                if (k % blockSize === 0) {
                    num = numBlocks - (k / blockSize)
                    if (num === 3) {
                        outArray.push('Block')
                    } else {
                        outArray.push(' ')
                    }
                    outArray.push(num)
                }
                outArray.push(blockRandomization[k])
            }

            outArray.push(' ')
            outArray.push(' ')
            for (let k = 1; k <= blockSize; k++) {
                outArray.push(k)
            }

            outArray.push(' ')
            outArray.push(' ')
            for (let k = 1; k <= blockSize; k++) {
                if (k === 2) {
                    outArray.push('Treatment')
                } else if (k === 3) {
                    outArray.push('Order')
                } else {
                    outArray.push(' ')
                }
            }

            // return blockRandomization;
            return outArray;
        }

        // Utility function to shuffle an array
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // Swap
            }
            return array;
        }

        setRandomization(createBlockRandomization(numBlocks, blockSize));
    }

    function arrayOutput(item) {
        // console.log(item)
        if (item === 'purple1') {
            return (<div className="block1"></div>)
        } else if (item === 'purple2') {
            return (<div className="block2"></div>)
        } else if (item === 'purple3') {
            return (<div className="block3"></div>)
        } else if (item === 'purple4') {
            return (<div className="block4"></div>)
        } else if (item === 'Block') {
            return (<div className="block">{item}</div>)
        } else if (item === 'Treatment') {
            return (<div className="treatment">{item}</div>)
        } else if (item === 'Order') {
            return (<div className="order"> {item}</div>)
        } else if (item === 'Treatme') {
            return (<div className="treat">{item}</div>)
        } else if (item === 'nts') {
            return (<div className="ments"> {item}</div>)
        } else {
            return (<div className="block0">{item}</div>)
        }
    }

    return (

        <>
            <div className="top">
                <h3>Stratified Randomization</h3>
                <h2>Let's Visualize block randomization.</h2>
                <h4>Block randomization is as simple as hitting a button!</h4>
                <h4>Free software packages such as <i>blockrand, randomizR, or pspych in R</i> can
                    randomize your study.</h4>
                <h4>But what is happening under the hood?</h4>
                <h4>    Hit "RUN" on this R code to see
                    a visualization of a block randomized study with 4 treatments.
                </h4>
            </div>

            <div className="container">
                <div className="box">
                    <div className="code">
                        <div><br></br></div>
                        <div>library<span className="spanY">(</span>RColorBrewer<span className="spanY">)</span></div>
                        <div><br></br></div>
                        <div><span className="spanG"># In how many blocks will subjects be randomized?</span></div>
                        <div>n_blocks &lt;- <span className="spanLG">{numBlocks}</span></div>
                        <div><br></br></div>
                        <div><span className="spanG"># How many treatments are we using?</span></div>
                        <div>n_treatments &lt;- <span className="spanLG">{blockSize}</span></div>
                        <div><br></br></div>
                        <div><span className="spanG"># Generate random orders of treatments</span></div>
                        <div>treatment_blocks &lt;-</div>
                        <div className="indent">sample<span className="spanY">(</span>n_treatments, n_treatments<span className="spanY">)</span> |&gt;</div>
                        <div className="indent">replicate<span className="spanY">(</span>n = n_blocks<span className="spanY">)</span></div>
                        <div><br></br></div>
                        <div><span className="spanG"># Visualize the treatment orders</span></div>
                        <div>treatment_colors &lt;- brewer.pal<span className="spanY">(</span>n_treatments, <span className="spanO">"Purples"</span><span className="spanY">)</span></div>
                        <div>par<span className="spanY">(</span>xpd = <span className="spanB">TRUE</span>, mar = c<span className="spanP">(</span><span className="spanLG">5</span>, <span className="spanLG">4</span>, <span className="spanLG">4</span>, <span className="spanLG">11</span><span className="spanP">)</span><span className="spanY">)</span></div>
                        <div>image<span className="spanY">(</span>treatment_blocks,</div>
                        <div className="indent">col = treatment_colors,</div>
                        <div className="indent">xlab = <span className="spanO">"Treatment Order"</span>, ylab = <span className="spanO">"Block"</span>,</div>
                        <div className="indent">axes = <span className="spanB">FALSE</span><span className="spanY">)</span></div>
                        <div>axis<span className="spanY">(</span><span className="spanLG">1</span>, at = seq<span className="spanP">(</span><span className="spanLG">0</span>, <span className="spanLG">1</span>, length.out = n_treatments<span className="spanP">)</span>, labels = seq<span className="spanP">(</span>n_treatments<span className="spanP">)</span><span className="spanY">)</span></div>
                        <div>axis<span className="spanY">(</span><span className="spanLG">2</span>, at = seq<span className="spanP">(</span><span className="spanLG">0</span>, <span className="spanLG">1</span>, length.out = n_blocks<span className="spanP">)</span>, labels = seq<span className="spanP">(</span>n_blocks<span className="spanP">)</span><span className="spanY">)</span></div>
                        <div>legend<span className="spanY">(</span><span className="spanLG">1</span> + <span className="spanLG">1.25</span> / n_treatments, <span className="spanLG">1</span>, title = <span className="spanO">"Treatments"</span>,</div>
                        <div className="indent">legend = LETTERS<span className="spanP">[</span>seq<span className="spanLB">(</span>n_treatments<span className="spanLB">)</span><span className="spanP">]</span>, fill = treatment_colors<span className="spanY">)</span></div>
                        <br></br>
                    </div>
                </div>

                <div className="box">
                    <div className="block-chart">
                        {randomization.map(item => arrayOutput(item))}
                    </div>
                </div>

            </div >
            <div>
                <br></br>
                <br></br>
                <input
                    type="button"
                    onClick={submitRunClick}
                    value="RUN" />
                <br></br>
                <br></br>
            </div>
        </>
    )
}