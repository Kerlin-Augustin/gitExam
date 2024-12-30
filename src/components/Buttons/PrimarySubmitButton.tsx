interface PrimarySubmitButtonProps {
  color: string,
  text: string,
  textColor: string,
}

function PrimarySubmitButton({
  color,
  text,
  textColor,
}: PrimarySubmitButtonProps) {
  return (
    <>
      <div className="text-center">
        <input
          type="submit"
          className="btn btn-light"
          style={{backgroundColor: color, color: textColor}}
          value={text}
        />
      </div>
    </>
  )
}

export default PrimarySubmitButton