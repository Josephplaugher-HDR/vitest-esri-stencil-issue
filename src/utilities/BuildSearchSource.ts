export default function BuildSearchSource(layer: any): any {
    return {
        layer,
        exactMatch: false, // Allow partial matches
        outFields: ["*"], // Fields to return
        name: layer.title,
        placeholder: `Search the ${layer.title} layer`
    }
}