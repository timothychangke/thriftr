import Pagination from '@mui/material/Pagination';

function ChooseClothes({ onShirtPageChangeHandler }) {
    return (
        <Pagination
            size="large"
            count={4}
            onChange={(event, pageNumber) =>
                onShirtPageChangeHandler(event, pageNumber)
            }
        />
    );
}

export default ChooseClothes;
