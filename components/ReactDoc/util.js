import reactElementToJSXString from 'react-element-to-jsx-string';

export function getDocgenInfo(ReactElement) {
    return ReactElement.ComposedComponent && ReactElement.ComposedComponent.__docgenInfo ||
        ReactElement.__docgenInfo;
}

export function getDisplayName(ReactElement) {
    return ReactElement.ComposedComponent && ReactElement.ComposedComponent.name ||
        ReactElement.name;
}

export function getJSXString(reactElement) {
    if (Array.isArray(reactElement)) {
        return reactElement.map((item) => {
            return reactElementToJSXString(item, {displayName: _getDisplayName});
        }).join('\n');
    }

    return reactElementToJSXString(reactElement, {displayName: _getDisplayName});
}

// Эти две функции нужны для reactElementToJSXString
function _getDisplayName(reactElement) {
    return reactElement.type.ComposedComponent && reactElement.type.ComposedComponent.name ||
        _getDefaultDisplayName(reactElement);
}

function _getDefaultDisplayName(reactElement) {
    return reactElement.type.displayName ||
        reactElement.type.name || // function name
        (typeof reactElement.type === 'function' ? // function without a name, you should provide one
            'No Display Name' :
            reactElement.type);
}
