import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { BackWallShape } from '../../styles/index';
import { selectedwall } from '../../store/selectedwallSlice';
import { selectAllWalls } from '../../store/wallsSlice/wallSlice';

const FirstWall = () => {

    const wallId = useAppSelector(selectAllWalls);
    const dispatch = useAppDispatch();

    return(
        <BackWallShape onClick={() => dispatch(selectedwall(1))}>
            1    
        </BackWallShape>
        
    )

}

export default FirstWall;