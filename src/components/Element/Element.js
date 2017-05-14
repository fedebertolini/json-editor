import React from 'react';
import { connect } from 'react-redux';
import { isImmutable, isKeyed, isIndexed, is } from 'immutable';
import { selectData as selectEditedData } from '../../store/selectors/edited';
import { selectData as selectSavedData } from '../../store/selectors/saved';
import ArrayElement from './ArrayElement';
import ValueElement from './ValueElement';
import ObjectElement from './ObjectElement';
import './styles.css';

const Element = ({ path, editedData, savedData, defaultExpanded }) => {
    const hasDataChanged = !is(savedData, editedData);
    if (isImmutable(editedData)) {
        if (isKeyed(editedData)) {
            return (
                <ObjectElement
                    path={path}
                    data={editedData}
                    defaultExpanded={defaultExpanded}
                    hasDataChanged={hasDataChanged}
                />
            );
        } else if (isIndexed(editedData)) {
            return (
                <ArrayElement
                    path={path}
                    data={editedData}
                    defaultExpanded={defaultExpanded}
                    hasDataChanged={hasDataChanged}
                />
            );
        }
        throw new Error(`Invalid immutable type: ${JSON.stringify(path)}`)
    }
    return (
        <ValueElement
            path={path}
            data={editedData}
            hasDataChanged={hasDataChanged}
        />
    );
};

const mapStateToProps = (state, ownProps) => ({
    editedData: selectEditedData(state, ownProps.path),
    savedData: selectSavedData(state, ownProps.path),
});

export default connect(mapStateToProps)(Element);
