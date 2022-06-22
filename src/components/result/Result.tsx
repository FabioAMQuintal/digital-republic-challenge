import { useAppSelector } from '../../store/hooks';
import { selectAllWalls } from '../../store/wallsSlice/wallSlice';
import { ResultContainer, Label } from '../../styles/index';
import { ResultList } from '../../styles/index';
import Helper from '../../utils/helpers';

const Result = () => {
    const results = Helper.amountOfInk(useAppSelector(selectAllWalls));
    let unidade = 'unidade'
    return (
        <ResultContainer>
            <Label>QUANTIDADE DE TINTA NECESSÁRIA</Label>
            <ResultList>
                {
                    results.map(item => {
                        return(
                            <li>
                                {item.size} L: {item.amount} {item.amount > 1 ? unidade.concat('s') : unidade}
                            </li>
                        )
                    })
                }
            </ResultList>
        </ResultContainer>
    )
}

export default Result;