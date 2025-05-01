export const ftueServiceCode = `namespace Features.Ftue.Controllers.Services
{
    public sealed class FtueService : IFtueService, IInitializable, IDisposable
    {
        [Dependency] private readonly IStreamService _streamService = default!;
        [Dependency] private readonly IFtueStepFactory _ftueStepFactory = default!;
        [Dependency] private readonly IFtueTriggerFactory _ftueTriggerFactory = default!;
        [Dependency] private readonly FtueSequenceDataList _sequenceDataList = default!;
        [Dependency] private readonly FtueVersion _ftueVersion = default!;
        [Dependency] private readonly UnityPlayerState _ps = default!;
        [Dependency] private readonly INKAnalytics.EventHelper _eventHelper = default!;

        // Sequence Trigger Completion Sources
        public UniTaskCompletionSource<FtueDataObject>? BoardEntered { get; private set; }
        public UniTaskCompletionSource<FtueDataObject>? FtueSequenceCompleted { get; private set; }
        public UniTaskCompletionSource<FtueDataObject>? ScreenOpened { get; private set; }
        public UniTaskCompletionSource<FtueDataObject>? ScreenClosed { get; private set; }
        public UniTaskCompletionSource<FtueDataObject>? RollStarted { get; private set; }
        public UniTaskCompletionSource<FtueDataObject>? RollEnded { get; private set; }
        public UniTaskCompletionSource<FtueDataObject>? LevelUp { get; private set;}
        public UniTaskCompletionSource<FtueDataObject>? PvpStarted { get; private set; }

        // Step Completion Sources
        public UniTaskCompletionSource<FtueDataObject>? ZeppelinIntroCompleted { get; private set; }
        public UniTaskCompletionSource<FtueDataObject>? TapIndicatorPressed { get; private set; }

        public IReadOnlyAsyncReactiveProperty<bool> FtueHidingUI => _ftueHidingUi;
        public IReadOnlyAsyncReactiveProperty<bool> FtueBlockingStore => _ftueBlockingStore;
        public IReadOnlyAsyncReactiveProperty<bool> FtueSequenceActive => _ftueSequenceActive;
        public IReadOnlyAsyncReactiveProperty<bool> FtueCompleted => _ftueCompleted;
        public IReadOnlyAsyncReactiveProperty<FtueCheckpointModel?> FtueCheckpointModel => _ftueCheckpointModel;

        .
        .
        .
    }
}
`;

export const ftueScreenControllerCode = `protected override async UniTask<VoidReturn> Run(FtueDialogueScreenView view, CancellationToken token)
{
    while (_stepQueue.Count > 0)
    {
        await RunSubTask(RunSubStep, token);
    }

    return new VoidReturn();
}

private async UniTask<ResultV<VoidReturn>?> RunSubStep(CancellationToken token)
{
    if (_stepQueue.Count <= 0)
    {
        return null;
    }

    DialogueStep nextStep = _stepQueue.Dequeue();

    _eventHelper.FtueSequenceSubStep(Model.SequenceIndex, Model.StepIndex, nextStep.Index);

    await nextStep.Step.Run(token);

    return null;
}
`;

export const ftueScreenCode = `#nullable enable
using System.Threading;
using Common.Logger;
using Cysharp.Threading.Tasks;
using InkGames.MVC.Views;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace Features.Ftue.Views.Screens
{
	public sealed class FtueDialogueScreenView : PKScreenView
	{
		[SerializeField] private CanvasGroup _canvasGroup = default!;
		[SerializeField] private TMP_Text _dialogueText = default!;
		[SerializeField] private Button _dialogButton = default!;
		[SerializeField] private RectTransform _dialogAnchor = default!;
		[SerializeField] private Transform _districtWorldUIParent = default!;
		[SerializeField] private Transform _panelParent = default!;
		[SerializeField] private TopBar _topBar = default!;

		[SerializeField] private float _topDialogueYPosition = 650f;
		[SerializeField] private float _middleDialogueYPosition = 0f;
		[SerializeField] private float _bottomDialogueYPosition = -650f;

		public CanvasGroup CanvasGroup => _canvasGroup;
		public TMP_Text DialogueText => _dialogueText;
		public Button DialogueButton => _dialogButton;
		public RectTransform DialogAnchor => _dialogAnchor;
		public Transform DistrictWorldUIParent => _districtWorldUIParent;
		public Transform PanelParent => _panelParent;
		public TopBar TopBar => _topBar;

		public float TopDialogueYPosition => _topDialogueYPosition;
		public float MiddleDialogueYPosition => _middleDialogueYPosition;
		public float BottomDialogueYPosition => _bottomDialogueYPosition;

		private void OnValidate()
		{
			Log.Validate(this, _canvasGroup, "{0} has missing required field {1}", name, nameof(_canvasGroup));
			Log.Validate(this, _dialogueText, "{0} has missing required field {1}", name, nameof(_dialogueText));
			Log.Validate(this, _dialogButton, "{0} has missing required field {1}", name, nameof(_dialogButton));
			Log.Validate(this, _dialogAnchor, "{0} has missing required field {1}", name, nameof(_dialogAnchor));
			Log.Validate(this, _districtWorldUIParent, "{0} has missing required field {1}", name,
				nameof(_districtWorldUIParent));
			Log.Validate(this, _panelParent, "{0} has missing required field {1}", name, nameof(_panelParent));
			Log.Validate(this, _topBar, "{0} has missing required field {1}", name, nameof(_topBar));
		}
	}
}
#nullable  disable
`;