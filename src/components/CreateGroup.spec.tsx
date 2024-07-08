import { render, screen } from '@testing-library/react'
import { CreateGroup } from './CreateGroup'
const renderComponent = () => {
    render(<CreateGroup />)
}
describe('그룹 생성 페이지', () => {
    test('그룹 입력 컴포넌트가 렌더링 되는가', () => {
        renderComponent()
        // todo: input component
        const input = screen.getByPlaceholderText('2022 제주도 여행')
        expect(input).not.toBe(null)
        // todo: save button
        const saveButton = screen.getByRole('button')
        expect(saveButton).not.toBe(null)
        
    })
    test('그룹 이름을 입력하지 않고 저장 버튼 클릭 시 에러 메세지를 노출한다', () => {

    })
    test('그룹 이름을 입력 후 저장 버튼 클릭 시 저장 성공', () => {

    })
})