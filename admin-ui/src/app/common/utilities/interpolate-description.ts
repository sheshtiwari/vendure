import { ConfigArgType, ConfigurableOperation } from 'shared/generated-types';

/**
 * Interpolates the description of an ConfigurableOperation with the given values.
 */
export function interpolateDescription(
    operation: ConfigurableOperation,
    values: { [name: string]: any },
): string {
    if (!operation) {
        return '';
    }
    const templateString = operation.description;
    const interpolated = templateString.replace(/{\s*([a-zA-Z0-9]+)\s*}/gi, (substring, argName: string) => {
        const normalizedArgName = argName.toLowerCase();
        const value = values[normalizedArgName];
        if (value == null) {
            return '_';
        }
        let formatted = value;
        const argDef = operation.args.find(arg => arg.name === normalizedArgName);
        if (argDef && argDef.type === ConfigArgType.MONEY) {
            formatted = value / 100;
        }
        if (argDef && argDef.type === ConfigArgType.DATETIME && value instanceof Date) {
            formatted = value.toLocaleDateString();
        }
        return formatted;
    });
    return interpolated;
}
