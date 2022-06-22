import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { LeftWallShape } from '../../styles/index';
import { selectedwall } from '../../store/selectedwallSlice';
import { selectAllWalls } from '../../store/wallsSlice/wallSlice';

const ThirdWall = () => {

    const wallId = useAppSelector(selectAllWalls);
    const dispatch = useAppDispatch();

    return(
        <LeftWallShape onClick={() => dispatch(selectedwall(3))}>
            3   
        </LeftWallShape>
    )

}

export default ThirdWall;