import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RightWallShape } from '../../styles/index';
import { selectedwall } from '../../store/selectedwallSlice';
import { selectAllWalls } from '../../store/wallsSlice/wallSlice';

const FourthWall = () => {

    const wallId = useAppSelector(selectAllWalls);
    const dispatch = useAppDispatch();

    return(
        <RightWallShape onClick={() => dispatch(selectedwall(4))}>
            4   
        </RightWallShape>
    )

}

export default FourthWall;
