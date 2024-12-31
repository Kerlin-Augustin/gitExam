interface PrimarySubmitButtonProps {
  buttonColor: string,
  text: string,
  textColor: string,
}

function PrimarySubmitButton({
  buttonColor,
  text,
  textColor,
}: PrimarySubmitButtonProps) {
  return (
    <>
      <div className="text-center">
        <input
          type="submit"
          className="btn btn-light"
          style={{ backgroundColor: buttonColor, color: textColor }}
          value={text}
        />
      </div>
    </>
  )
}

export default PrimarySubmitButton