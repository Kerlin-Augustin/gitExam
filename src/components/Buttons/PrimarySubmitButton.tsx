interface PrimarySubmitButtonProps {
  buttonColor: string,
  buttonWidth?: string,
  text: string,
  textColor: string,
  onClick?: () => void,
}

function PrimarySubmitButton({
  buttonColor,
  text,
  textColor,
  onClick,
  buttonWidth,
}: PrimarySubmitButtonProps) {
  return (
    <>
      <div className="text-center">
        <input
          type="submit"
          className="btn btn-light"
          onClick={onClick}
          style={{ backgroundColor: buttonColor, color: textColor, width: buttonWidth }}
          value={text}
        />
      </div>
    </>
  )
}

export default PrimarySubmitButton
