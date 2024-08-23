
export default function Randomize() {

    const groups = ['A', 'B', 'C', 'D'];

    function createBlockRandomization(numBlocks, blockSize) {
        
        let blockRandomization = [];

        for (let i = 0; i < numBlocks; i++) {
            let block = [];

            // Fill the block with equal numbers of each group
            for (let j = 0; j < blockSize / 4; j++) {
                block.push(groups[0]);
                block.push(groups[1]);
                block.push(groups[2]);
                block.push(groups[3]);
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

    // Example usage
    const numBlocks = 6;
    const blockSize = 4; // Block size must be even (e.g., 2 participants in each group)
    const randomization = createBlockRandomization(numBlocks, blockSize);

    console.log(randomization);

    return (

        <>
            <div>
                Number of Blocks: {numBlocks}
            </div>
            <div>
                Block Size: {blockSize}
            </div>
            <div>
                Groups: {groups[0]}, {groups[1]}, {groups[2]}, {groups[3]}
            </div>
            <ul>
                {randomization.map((item, index) =>
                    <li key={index}>{index + 1}  :  {item}</li>
                )}
            </ul>

        </>
    )

}