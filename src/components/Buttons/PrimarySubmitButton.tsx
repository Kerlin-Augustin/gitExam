interface PrimarySubmitButtonProps {
  buttonColor: string,
  text: string,
  textColor: string,
  onClick?: () => void
}


function PrimarySubmitButton({
  buttonColor,
  text,
  textColor,
  onClick
}: PrimarySubmitButtonProps) {
  return (
    <>
      <div className="text-center">
        <input
          type="submit"
          className="btn btn-light"
          onClick={onClick}
          style={{ backgroundColor: buttonColor, color: textColor }}
          value={text}
        />
      </div>
    </>
  )
}

export default PrimarySubmitButton