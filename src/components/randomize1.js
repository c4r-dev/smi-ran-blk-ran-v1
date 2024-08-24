import React from "react";


export default function randomize1() {

    let numBlocks = 3;
    let blockSize = 4;
    let randomization = []

    const submitRunClick = () => {

        function createBlockRandomization(numBlocks, blockSize) {
            let blockRandomization = [];
            for (let i = 0; i < numBlocks; i++) {
                let block = [];
                // Fill the block with equal numbers of each group
                for (let j = 0; j < blockSize / blockSize; j++) {
                    block.push('light purple block')
                    block.push('light+ purple block')
                    block.push('light++ purple block')
                    block.push('dark purple block')
                }
                // Shuffle the block
                block = shuffleArray(block);
                blockRandomization = blockRandomization.concat(block);
            }
            return blockRandomization;
        }

        // Utility function to shuffle an array
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; // Swap
            }
            return array;
        }

        randomization = createBlockRandomization(numBlocks, blockSize);
        console.log(randomization)
    }

    return (

        <>
            <div>library(RColorBrewer)</div>
            <div># In how many blocks will subjects be randomized?</div>
            <div>n_blocks &lt;- 3</div>
            <div># How many treatments are we using?</div>
            <div>n_treatments &lt;- 4</div>
            <div># Generate random orders of treatments</div>
            <div>treatment_blocks &lt;-</div>
            <div>sample(n_treatments, n_treatments) |&gt;</div>
            <div>replicate(n = n_blocks)</div>
            <div># Visualize the treatment orders</div>
            <div>treatment_colors &lt;- brewer.pal(n_treatments, "Purples")</div>
            <div>par(xpd = TRUE, mar = c(5, 4, 4, 11))</div>
            <div>image(treatment_blocks,</div>
            <div>col = treatment_colors,</div>
            <div>xlab = "Treatment Order", ylab = "Block",</div>
            <div>axes = FALSE)</div>
            <div>axis(1, at = seq(0, 1, length.out = n_treatments), labels = seq(n_treatments))</div>
            <div>axis(2, at = seq(0, 1, length.out = n_blocks), labels = seq(n_blocks))</div>
            <div>legend(1 + 1.25 / n_treatments, 1, title = "Treatments",</div>
            <div>legend = LETTERS[seq(n_treatments)], fill = treatment_colors)</div>

            <div>
                <input
                    type="button"
                    onClick={submitRunClick}
                    value="RUN" />
            </div>
    
        </>
    )

}