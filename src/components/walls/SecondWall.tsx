import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FrontWallShape } from '../../styles/index';
import { selectedwall } from '../../store/selectedwallSlice';
import { selectAllWalls } from '../../store/wallsSlice/wallSlice';

const SecondWall = () => {

    const wallId = useAppSelector(selectAllWalls);
    const dispatch = useAppDispatch();
    return(
        <FrontWallShape onClick={() => dispatch(selectedwall(2))}>
            2       
        </FrontWallShape>
    )

}

export default SecondWall;