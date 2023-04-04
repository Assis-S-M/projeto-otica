export const Text = ({color, fontSize, fontWeight, boxWidth, boxHeight, format, children}) => {
    const style = {
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        width: boxWidth,
        height: boxHeight
    }

    if (format == "R$") {
        children = "R$ " + children;
    }
    
    return (
        <>
            <p style={style}>{children}</p>
        </>
    )
}