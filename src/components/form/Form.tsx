import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { ContainerInput, FormGroup, Label, Input, ContainerButton, CounterButton, SubmitButton, ErrorLabel } from '../../styles/index';
import { selectWallSelected } from '../../store/selectedwallSlice';
import { toSetHeight, toSetWidth, toSetArea, toSetDoor, toSetWindow, selectAllWalls } from '../../store/wallsSlice/wallSlice'
import Helper from '../../utils/helpers';

const Form = () => {

    const selectedWall = useAppSelector(selectWallSelected);
    const toUpdate = useAppSelector(selectAllWalls).filter(x => x.id === selectedWall)
    
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    let [door, setDoor] = useState(0);
    let [window, setWindow] = useState(0);
    const [error, setError] = useState('');
    let [halfArea, setHalfArea] = useState(0);
    let [finalArea, setFinalArea] = useState(0);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setWidth(toUpdate[0].width);
        setHeight(toUpdate[0].height)
        setDoor(toUpdate[0].doors)
        setWindow(toUpdate[0].windows)
    }, [selectedWall])

    const increaseDoor = () => {
        const acceptable = Helper.isDoorAndWindowAcceptable(halfArea, door + 1, window);
        const tall = Helper.isWallTallEnought(height);
        if (acceptable && tall) {
            console.log(finalArea - Helper.getDoorArea())
            setFinalArea(finalArea - Helper.getDoorArea());
            setDoor(door + 1)
        } else {
            setError(Helper.setError().maximumItem);
        }
    }
    const decreaseDoor = () => {
        const acceptable = Helper.isDoorAndWindowAcceptable(halfArea, door - 1, window);
        const tall = Helper.isWallTallEnought(height);
        if (acceptable && tall && door > 0) {
            console.log(finalArea + Helper.getDoorArea())
            setFinalArea(finalArea + Helper.getDoorArea());
            setDoor(door - 1)
            setError(Helper.setError().blank)
        }
    }

    const increaseWindow = () => {
        const acceptable = Helper.isDoorAndWindowAcceptable(halfArea, door, window + 1);
        if (acceptable) {
            console.log(finalArea - Helper.getWindowArea())
            setFinalArea(finalArea - Helper.getWindowArea());
            setWindow(window + 1)
        } else {
            setError(Helper.setError().maximumItem);
        }
    }
    const decreaseWindow = () => {
        const acceptable = Helper.isDoorAndWindowAcceptable(halfArea, door, window - 1);
        const tall = Helper.isWallTallEnought(height);
        if (acceptable && window > 0) {
            console.log(finalArea + Helper.getWindowArea())
            setFinalArea(finalArea + Helper.getWindowArea());
            setWindow(window - 1)
            setError(Helper.setError().blank)
        }
    }

    useEffect(() => {
        if (width > 0 && height > 0) {
            const area = Helper.totalArea(Number(width), Number(height));
            if (!area) {
                setError(Helper.setError().minimumWall);
                setHeight(0);
                setWidth(0);
            } else {
                setError(Helper.setError().blank);
                setFinalArea(Helper.calcArea(width, height))
                setHalfArea(Helper.calcArea(width, height) / 2)
            }
        }
    }, [width, height])

    return (
        <ContainerInput>
            <FormGroup>
                {<Label>PAREDE: {selectedWall}</Label>}
            </FormGroup>
            <br></br>
            <FormGroup>
                <Label>ALTURA</Label>
                <Input
                    type="number"
                    min={0}
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                />
            </FormGroup>
            <FormGroup>
                <Label>LARGURA</Label>
                <Input
                    type="number"
                    min={0}
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                />
            </FormGroup>
            <FormGroup>
                {
                    error && <ErrorLabel>{error}</ErrorLabel>
                }
            </FormGroup>
            <FormGroup>
                <Label>PORTAS</Label>
                <ContainerButton>
                    <CounterButton
                    onClick={(e) => increaseDoor()}
                    > + </CounterButton>
                    <Label>{door}</Label>
                    <CounterButton 
                    onClick={(e) => decreaseDoor()}
                    > - </CounterButton>
                </ContainerButton>
            </FormGroup>
            <FormGroup>
                <Label>JANELAS</Label>
                <ContainerButton>
                    <CounterButton
                    onClick={(e) => increaseWindow()}
                    > + </CounterButton>
                    <Label>{window}</Label>
                    <CounterButton
                    onClick={(e) => decreaseWindow()}
                    > - </CounterButton>
                </ContainerButton>
            </FormGroup>
            <FormGroup>
                <ContainerButton>
                    <SubmitButton onClick={() => {
                        dispatch(toSetHeight({ id: selectedWall, content: height }));
                        dispatch(toSetWidth({ id: selectedWall, content: width }));
                        dispatch(toSetArea({ id: selectedWall, content: finalArea }));
                        dispatch(toSetDoor({ id: selectedWall, content: door }));
                        dispatch(toSetWindow({ id: selectedWall, content: window }));
                    }} >
                        <span>CALCULAR</span>
                    </SubmitButton>
                </ContainerButton>
            </FormGroup>
        </ContainerInput>
    )
}

export default Form;